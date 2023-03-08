const MouseScroll = () => (

    <div className="absolute bottom-4 left-[50%] translate-x-[-50%] hidden md:block">

        <div className="
            w-[50px] h-[80px] border-4 border-gray-800/70 rounded-[60px]
            before:content-['']
            before:w-4
            before:h-4
            before:absolute
            before:top-7
            before:left-[50%]
            before:translate-x-[-50%]
            before:opacity-100
            before:rounded-[50%]
            before:bg-gray-600/80
            before:animate-mouseScroll" />

    </div>
)

export default MouseScroll;