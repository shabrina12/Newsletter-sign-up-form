import { useSearchParams } from 'next/navigation'

const SuccessComponent = () => {
    const searchParams = useSearchParams()
    const email = (searchParams.get('search')); //get user input email from home page

    return (
        <p>A confirmation email has been sent to <span className="font-semibold">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
    )
}

export default SuccessComponent
