function Page1({
  changeTheme,
  scaleCursorEnter,
  scaleCursorLeave,
  frameVisibleAnimation,
}) {
  return (
    <div className="w-full h-fit md:h-full overflow-hidden relative">
      
      <div className="w-fit h-fit md:w-full relative md:absolute md:top-0 md:left-0 z-[20]">
        <h1
          onMouseEnter={() => scaleCursorEnter()}
          onMouseLeave={() => scaleCursorLeave()}
          onClick={() => changeTheme()}
          className="text-[4.6vh] px-2 md:text-3xl font-semibold w-full md:w-1/4 mt-5 ml-2 md:mt-10 md:ml-50 leading-10 md:leading-8 selection:bg-red-500 selection:text-yellow-200"
        >
          At Thirtysixstudio, we build digital assets and immersive experiences
          for purposeful brands.
        </h1>
        <p className="text-xs px-2 md:text-[90%] font-medium w-full md:w-1/3 ml-2 mt-5 md:ml-50 leading-4 selection:bg-red-500 selection:text-yellow-200">
          We're a boutique production studio focused on design, animation, and
          technology, constantly rethinking what digital craft can do for
          present-day ads and campaigns.
        </p>
        <div className="w-full flex items-center justify-end mt-5">
          <h3
            onMouseEnter={() => scaleCursorEnter()}
            onMouseLeave={() => scaleCursorLeave()}
            onClick={() => changeTheme()}
            className="text-[3.1vh] font-normal md:text-5xl w-full md:w-1/2 text-end py-0 px-3 md:px-8 mt-6 md:mt-0 selection:bg-red-500 selection:text-yellow-200 leading-7 md:leading-none"
          >
            We aim to elevate digital production in the advertising space,
            bringing your ideas to life.
          </h3>
        </div>
      </div>
      
      <h1
        onMouseEnter={() => scaleCursorEnter()}
        onMouseLeave={() => scaleCursorLeave()}
        onClick={frameVisibleAnimation}
        className="ml-2 w-fit text-[11rem] font-bold absolute bottom-0 left-0 selection:bg-red-500 selection:text-yellow-200 text-center hidden md:flex"
      >
        Thirtysixstudios.
      </h1>

      <h1
        onMouseEnter={() => scaleCursorEnter()}
        onMouseLeave={() => scaleCursorLeave()}
        onClick={frameVisibleAnimation}
        className="w-full md:w-fit text-[5.6vh] px-2 mt-20 font-bold selection:bg-red-500 selection:text-yellow-200 flex md:hidden"
      >
        Thirtysixstudios.
      </h1>

    </div>
  );
}

export default Page1;