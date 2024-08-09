import { useState } from 'react'

export default function useThemeHandler() {
  const [openProfile, setOpenProfile] = useState<boolean>(false)

  const handleOpenProfile = () => {
    setOpenProfile((openProfile) => (openProfile = !openProfile))
  }

  return { openProfile, handleOpenProfile }
}
