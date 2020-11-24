import React from "react";
import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  VStack,
  useDisclosure,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import customTheme from "./theme";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

var Lorem = require('react-lorem-component');

export default function App() {
  const { isOpen, onOpen, onClose} = useDisclosure()
  const [size, setSize] = React.useState("md")

  const [scrollBehavior, setScrollBehavior]=React.useState("inside")
  const btnRef = React.useRef()

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"]

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  return (
    <ChakraProvider theme={customTheme}>
      <VStack>
        <Menu placement="bottom">
          <MenuButton as={Button}>Full-screen menu toggle</MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </VStack>
      
      <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Stack direction="row">
          <Radio value="inside">inside</Radio>
          <Radio value="outside">outside</Radio>
        </Stack>
      </RadioGroup>

      {sizes.map((size)=>
        <Button
          onClick={()=>handleSizeClick(size)}
          key={size}
          m={4}
          mt={3}
          ref={btnRef}
          >{`Open ${size}Modal`}</Button>)}

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        size={size}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={20} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>

    
  );
}
