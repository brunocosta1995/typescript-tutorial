import { useTheme, ThemeProvider } from "../../starter/06-context/context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();
  console.log(context);

  const toggleTheme = {
    backgroundColor: 'black',
    color: 'white'
  }

  return (
    <div style={context.theme === 'dark' ? toggleTheme : {backgroundColor: 'white'}}>
      <h2>React & Typescript</h2>
      <button onClick={()=>{
        if (context.theme === 'system') {
          context.setTheme('dark')
          return;
        }
        context.setTheme('system');
      }}
      className="btn btn-center"
      >Toggle Theme</button>
    </div>
  );
}
export default ParentComponent;
