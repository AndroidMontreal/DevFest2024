import Navbar from '@/components/elements/Navbar';

const MobileDrawer = ({ isOpen, onClose }) => {
  return (


    <div
      className={`lg:hidden
            w-full 
            fixed 
            bottom-0
            left-0
            h-auto 
            bg-white 
            shadow-lg 
            transform 
            transition-transform 
            duration-400 
            ease-in-out 
            origin-bottom 
            ${isOpen ? 'translate-y-0' : 'translate-y-full'} 
          `} onClick={onClose}>

      {/* Header/Title Section */}
      <div className="mb-4 pl-4 pt-3"> {/* Add margin-bottom for spacing */}
        <h2 className="text-md">DevFest Montreal</h2>
        <p className="text-gray-500 text-sm">GDG Montreal</p>
      </div>

      <Navbar isMobile={true} />


    </div>


  );
};

export default MobileDrawer;
