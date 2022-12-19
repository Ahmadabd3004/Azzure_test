import { useRouter } from 'next/router'

export default function CommentPage() {
  const router = useRouter()
  const id = router.query.id

  return (
    <>
      <h1>Post: {id}</h1>
    </>
  )
}