import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-black'>
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary:'bg-purple-500 hover:bg-purple-600 text-sm normal-case',
          }
        }}
      />
    </div>
  )
}