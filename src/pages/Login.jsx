import { Link } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import SocialButton from '../components/ui/SocialButton'
import { FacebookIcon, GoogleIcon } from '../components/auth/authIcons'

export default function Login() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="text-body-m text-primary-700">Sign In</p>
      <h1 className="font-heading text-heading-s font-semibold text-neutral-950 md:text-heading-m">
        Welcome Back
      </h1>

      <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col gap-5">
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="designer@example.com"
        />
        <Input id="password" label="Password" type="password" placeholder="********" />
        <Button type="submit" className="self-end">
          Sign In
        </Button>
      </form>

      <div className="mt-10 flex items-center gap-4 text-body-s text-neutral-400">
        <span className="h-px flex-1 bg-neutral-100" />
        or
        <span className="h-px flex-1 bg-neutral-100" />
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <SocialButton label="Continue with Facebook">
          <FacebookIcon className="size-6" />
        </SocialButton>
        <SocialButton label="Continue with Google">
          <GoogleIcon className="size-6" />
        </SocialButton>
      </div>

      <p className="mt-auto pt-10 text-center text-body-s text-neutral-500">
        New user?{' '}
        <Link to="/register" className="text-primary-700 hover:underline">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  )
}