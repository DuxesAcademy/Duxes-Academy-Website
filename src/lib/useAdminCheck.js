import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

export function useAdminCheck() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(docRef);
        setIsAdmin(userDoc.exists() && userDoc.data().role === 'admin');
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return isAdmin;
}
