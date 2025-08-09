import { Link } from "react-router"

function ResumeCard({resume :{resume:Resume}}) {
  return (
    <Link to="`/resume/${resume.id}`}">ResumeCard</Link>
  )
}

export default ResumeCard