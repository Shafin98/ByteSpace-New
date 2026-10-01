import { Link } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

export default function Register() {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <p className="text-body-m text-primary-700">Create an Account</p>
      <h1 className="font-heading text-heading-s font-semibold text-neutral-950 md:text-heading-m">
        Welcome to <br className="hidden sm:block" />
        ByteSpace
      </h1>

      <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col gap-5">
        <Input id="name" label="Full Name" type="text" placeholder="Jamie Davis" />
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="designer@example.com"
        />
        <Input id="password" label="Password" type="password" placeholder="********" />
        <Button type="submit" className="self-end">
          Continue
        </Button>
      </form>

      <p className="mt-auto pt-10 text-center text-body-s text-neutral-500">
        Already have an account?{' '}
        <Link to="/login" className="text-primary-700 hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  )
}