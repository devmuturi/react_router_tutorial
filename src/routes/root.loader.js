import { getContacts, createContact } from "../contacts.jsx";

export async function loader() {
  // Fetch contacts data if needed
  const contacts = await getContacts();
  return { contacts };
}

export async function action() {
  const contact = await createContact();
  return { contact };
}