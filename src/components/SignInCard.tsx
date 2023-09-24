import { GoogleAuthButton } from './GoogleAuthButton'

const SignInCard = () => {
  return (
    <section
      id='signin'
      className='border-2 border-lime-200 rounded-lg p-10 shadow-md shadow-lime-200'
    >
      <h2>Let's improve your finance together!</h2>
      <h3>Sign In</h3>
      <ul>
        <li>
          <GoogleAuthButton />
        </li>
      </ul>
    </section>
  )
}

export default SignInCard
