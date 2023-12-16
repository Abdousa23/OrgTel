import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const SuccessMsg = () => {
    return (
    <div>
        <div className="bg-slate-200 w-1/2 pl-16  relative mx-auto my-8 rounded py-4 before:content-[''] before:absolute before:w-1/6 before:h-full before:bg-green-600 before:left-0 before:top-0 "> <CheckCircleIcon color="success" fontSize="large" />You have Registered successfully</div>
    </div>
    )
}

export default SuccessMsg
