import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../services/firebase'

const ordered = (col) => getDocs(query(collection(db, col), orderBy('order')))

export function usePortfolioData() {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    async function fetch() {
      try {
        const [profileSnap, metaSnap, skillsSnap, expSnap, projectsSnap] = await Promise.all([
          getDoc(doc(db, 'portfolio', 'profile')),
          getDoc(doc(db, 'portfolio', 'meta')),
          ordered('skillGroups'),
          ordered('experience'),
          ordered('projects'),
        ])

        setData({
          profile:     profileSnap.data(),
          meta:        metaSnap.data(),
          skillGroups: skillsSnap.docs.map((d) => d.data()),
          experience:  expSnap.docs.map((d) => d.data()),
          projects:    projectsSnap.docs.map((d) => d.data()),
        })
      } catch (err) {
        console.error('Firestore fetch error:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [])

  return { data, loading, error }
}
