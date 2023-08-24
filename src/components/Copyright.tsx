export const copyRight = () => {
    const year = new Date().getFullYear(); 
  
    return (
      <>
        <div className="flex flex-wrap justify-center items-center text-sm text-gray-500">
          <p className="text-center">
            &copy; {year}{" "}
            <span className="hover:text-gray-900">Diabase Core Development Team</span>
            . All rights reserved.
          </p>
        </div>
      </>
    );
  };
  