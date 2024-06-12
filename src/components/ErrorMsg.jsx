import WarningIcon from "@mui/icons-material/Warning"
const ErrorMsg = (message) => {

  return (
    <>
      
    <div className="bg-slate-200 w-1/2  relative mx-auto my-8 rounded py-4 px-6">  <WarningIcon />{message.errMessage.message}</div>
    </>
)
}

export default ErrorMsg
