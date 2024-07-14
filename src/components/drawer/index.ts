import DrawerButton from "./DrawerButton";
import DrawerClose from "./DrawerClose";
import DrawerContent from "./DrawerContent";
import DrawerDescription from "./DrawerDescription";
import DrawerFooter from "./DrawerFooter";
import DrawerHeader from "./DrawerHeader";
import DrawerRoot from "./DrawerRoot";
import DrawerTitle from "./DrawerTitle";

export default Object.assign(DrawerRoot, {
  Button: DrawerButton,
  Title: DrawerTitle,
  Description: DrawerDescription,
  Content: DrawerContent,
  Header: DrawerHeader,
  Footer: DrawerFooter,
  Close: DrawerClose,
});

/* 
 Dependencies:
 vaul - Headless Drawer ui library
 tailwindcss - Utility-first CSS framework for styling

 Install dependencies:
 npm install vaul

      <Drawer open={open} onOpenChange={setOpen}>
      <Drawer.Button asChild>
        <button>edit</button>
      </Drawer.Button>
      <Drawer.Content>
        <Drawer.Header className="text-left">
          <Drawer.Title>Edit profile</Drawer.Title>
          <Drawer.Description>
            Make changes to your profile here. Click save when you're done.
          </Drawer.Description>
        </Drawer.Header>
        <div className="px-4">hello ee</div>
        <Drawer.Footer className="pt-2">
          <Drawer.Close asChild>close</Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
*/
