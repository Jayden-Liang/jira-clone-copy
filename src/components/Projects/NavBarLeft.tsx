import Logo from "../Ui/Logo"
import SearchIcon from "../Ui/SearchIcon"
import AddIcon from "../Ui/AddIcon"
import QuestionIcon from "../Ui/QuestionIcon"
import { useState } from 'react'
import AboutTooltip from "./utils/AboutToolTip"

const defaultWith = '80px'

type ItemProps = {
    renderIcon: Function,
    textStyle: Object,
    itemText: string
}

const Item: React.FC<ItemProps> = ({ renderIcon, textStyle, itemText }) => {
    return <div className="flex box-border items-center p-2 pl-5 hover:bg-slate-100/10 cursor-pointer">
        {renderIcon()}
        <div className="whitespace-nowrap font-bold text-xs text-white weight-bold" style={textStyle}>
            {itemText}
        </div>
    </div>
}


const NavbarLeft: React.FC = () => {
    const [expandWith, setExpandWith] = useState(defaultWith)
    const handleMouseIn = () => {
        setExpandWith('180px')
    }

    const handleMouseOut = () => {
        setExpandWith(defaultWith)
    }
    //因为tailwind.css默认不支持动态class
    const style = {
        width: expandWith,
        transition: 'ease-out 0.1s',
    }
    const textStyle: { [key: string]: string } = {
        visibility: expandWith === defaultWith ? "hidden" : "visible",
        opacity: expandWith === defaultWith ? "0" : "1",
        position: 'relative',
        left: expandWith === defaultWith ? "0px" : "10px",
        transition: 'all ease-out 0.07s'
    }
    return (
        <div style={style}
            className='bg-[#0747A6] h-screen fixed '
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
        >
            <div className="my-3 p-5 pb-3" >
                <Logo size='28px' />
            </div>
            <Item renderIcon={
                () => <SearchIcon className="h-6 w-6" color="white" />}
                textStyle={textStyle}
                itemText="SEARCH ISSUES"
            />
            <div>
                <Item renderIcon={
                    () => <AddIcon className="h-6 w-6" color="white" />}
                    textStyle={textStyle}
                    itemText="SEARCH ISSUES"
                />
            </div>

            <div className="absolute w-full bottom-8">
                <AboutTooltip
                    place= 'right'
                    offset={{}}
                    renderItem={() => (
                        <Item renderIcon={
                            () => <QuestionIcon className="h-7 w-7" color="white" />}
                            textStyle={textStyle}
                            itemText="ABOUT"
                        />
                    )}
                />
            </div>

        </div>
    )
}

export default NavbarLeft