import React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  SimpleForm,
  TextField,
  TextInput,
  EditButton,
  DeleteButton,
  ImageField,
  ImageInput,
} from "react-admin";

export const CommentShow = (props) => (
  <Show {...props}>
    <Datagrid>
      <TextField source="Comment Section" />
      <ImageField source="Profile-Pic.src" title="title" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </Show>
);
export const CommentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="Comment Section" />
        <ImageField source="Profile-Pic.src" title="title" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
export const CommentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="Comment Section" multiline />
      <ImageInput source="Profile-Pic" label="Profile-Pic" accept="image/*">
        <ImageField source="Profile-Pic" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const CommentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="Comment Section" multiline />
      <ImageInput source="Profile-Pic" label="Profile-Pic" accept="image/*">
        <ImageField source="Profile-Pic" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const MediaShow = (props) => (
  <Show {...props}>
    <Datagrid>
      <TextField source="url" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </Show>
);
export const MediaList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="url" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
export const MediaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);

export const MediaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="url" />
    </SimpleForm>
  </Edit>
);
