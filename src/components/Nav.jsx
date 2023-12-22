import { Typography } from "@material-tailwind/react";
import { useScrollPosition } from "../hooks/useScrollPosition";


const Nav = ({ children }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()

  return (
    <div
      className="sticky top-0 z-20  transition-shadow w-full px-4"
    >

      <div className="flex   justify-center flex-col items-center w-full">

        <div className={classNames(
          scrollPosition > 0 ? 'shadow shadow-lg bg-black ' : 'shadow-none', 'flex w-full justify-center')}>
          <Typography variant="h1" color="white">
            TO
          </Typography>
          <Typography variant="h1" color="blue">
            DO
            &nbsp;&nbsp;
          </Typography>
          <Typography variant="h1" color="green">
            APP
          </Typography>
          <Typography variant="p" color="">
            🎯
          </Typography>
        </div>

        {children}
      </div>

    </div>
  )
}
export default Nav