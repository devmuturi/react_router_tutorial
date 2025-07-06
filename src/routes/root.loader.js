import { getContacts } from "../contacts.jsx";

export async function loader() {
  // Fetch contacts data if needed
  const contacts = await getContacts();
  return { contacts };
}