import { worksData } from '../../constants/data';
import { useEffect, useState } from 'react';


const Works = () => {

  // dynamically render components...
  const [component, setComponent] = useState(null);


  // when user click render component dynamically by its name...
  const handleClick = async (item) => {
    const component = await dynamicallyLoadComponent(item);
    setComponent(component);
  };


  // dynamically import component by its name from its file path...
  const dynamicallyLoadComponent = async (componentName) => {
    const withoutSpaceComponentName = componentName.replace(" ", "");
    const { default: Component } = await import(`../children/${withoutSpaceComponentName}.jsx`);
    return <Component />;
  };


  // 1st time render 1st component, by default...
  useEffect(() => {
    (
      async () => {
        const module = await import('../children/Illustration.jsx');
        const Component = module.default;
        setComponent(<Component />);
      }
    )();
  }, []);


  if (!component) {
    return <div>Loading...</div>;
  }


  return (
    <section className='snap-center h-screen flex justify-center' id='works'>

      <div className="w-[1400px] flex justify-between items-center gap-5">

        {/* Left Side */}
        <div className="flex-1 flex items-center">
          <ul className='flex flex-col gap-5 text-[85px]'>
            {
              worksData.map(item =>
                <li
                  key={item}
                  after-dynamic-value={item}
                  className={`cursor-pointer font-bold text-transparent relative textOutline w-fit
                  after:content-[attr(after-dynamic-value)]
                  after:absolute
                  after:w-0
                  after:top-0
                  after:left-0
                 after:text-red-300
                  after:overflow-hidden
                  after:whitespace-nowrap
                  hover:after:animate-textHover
                  hover:after:noTextOutline `}
                  onMouseEnter={() => handleClick(item)}
                >
                  {item}
                </li>
              )
            }
          </ul>
        </div>


        {/* Right Side */}
        <div className="flex-1">
          {
            component
          }
        </div>

      </div>

    </section>
  )
}

export default Works