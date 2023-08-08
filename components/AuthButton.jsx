export const AuthButton = ({ children, isLoading, ...rest }) => {
  return (
    <button
      className='w-full hover:opacity-70 app-border-gradient-rounded-lg group'
      disabled={isLoading}
      type="submit"
      {...rest}
    >
      <span className="app-bg-black  py-2 group-disabled:bg-[#363232f2]">{isLoading ? 'Loading...' : children || 'Submit'}</span>
    </button>
  );
};