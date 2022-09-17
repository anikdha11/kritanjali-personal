import React from "react";
import { Menu, MenuItem, View } from "@aws-amplify/ui-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenChange = (open) => {
    setIsOpen(open);
    // Do something else
  };
  const closeMenu = () => setIsOpen(false);
  return (
    <div style={{ padding: "0.5rem", margin: "0rem 1rem" }}>
      <View width="4rem">
        <Menu
          isOpen={isOpen}
          onOpenChange={handleOpenChange}
          width="4rem"
          maxWidth="5rem"
          backgroundColor="transparent"
          paddingRight="2rem"
          border="0"
          direction="row"
        >
          <MenuItem
            color="gray"
            onClick={() => {
              closeMenu();
              alert("Download");
            }}
          >
            HOME
          </MenuItem>
          <MenuItem
            color="gray"
            onClick={() => {
              closeMenu();
              alert("Create a Copy");
            }}
          >
            BLOG
          </MenuItem>
          <MenuItem
            color="gray"
            onClick={() => {
              closeMenu();
              alert("Mark as Draft");
            }}
          >
            PORTFOLIO
          </MenuItem>
          <MenuItem
            color="gray"
            onClick={() => {
              closeMenu();
              alert("Mark as Draft");
            }}
          >
            About
          </MenuItem>
        </Menu>
      </View>
    </div>
  );
};

export default Navigation;
