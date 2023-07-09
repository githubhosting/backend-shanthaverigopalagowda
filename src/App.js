import React from "react";
import { Admin, Resource } from "react-admin";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";
import {
  firebaseConfig as config,
  firebaseApp as firebaseAppInstance,
} from "./FIREBASE_CONFIG.js";
import {
  CommentList,
  CommentEdit,
  CommentCreate,
  CommentShow,
  MediaList,
  MediaEdit,
  MediaCreate,
  MediaShow,
} from "./comments/comments";

// Optional
const options = {
  app: firebaseAppInstance,
  persistence: "session",
};

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      title="Admin Panel"
    >
      <Resource
        name="Comments"
        list={CommentList}
        show={CommentShow}
        create={CommentCreate}
        edit={CommentEdit}
      />
      <Resource
        name="Media"
        list={MediaList}
        show={MediaShow}
        create={MediaCreate}
        edit={MediaEdit}
      />
    </Admin>
  );
}

export default App;
