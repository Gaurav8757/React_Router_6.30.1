import { getContacts } from "../contact/contacts.js";

async function Loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default Loader;