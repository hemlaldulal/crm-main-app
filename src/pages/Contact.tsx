import TableHeader from "./TableHead";

const ContactDetails = () => {
  const contacts = [
    {
      name: "AAAAAA",
      lastComm: "4/23/2024",
      nextComm: "12/23/2024",
      opportunity: "High",
      category: "Category A",
    },
    {
      name: "BBBBBB",
      lastComm: "4/23/2024",
      nextComm: "12/23/2024",
      opportunity: "Low",
      category: "Category B",
    },
  ];

  return (
    <div className="block">
      <TableHeader
        columns={[
          "Name",
          "Phone Number",
          "Last communication",
          "Status",
          "Type/Industry",
          "Action",
        ]}
      />
      <div className="flex-grow min-w-full ">
        {" "}
        <h2 className="text-2xl font-bold mb-4">Contact details</h2>
        <table className="min-w-full bg-white">
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{contact.name}</td>
                <td className="py-2 px-4 border-b">{contact.lastComm}</td>
                <td className="py-2 px-4 border-b">{contact.nextComm}</td>
                <td className="py-2 px-4 border-b">{contact.opportunity}</td>
                <td className="py-2 px-4 border-b">{contact.category}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-600">Email</button>
                  <button className="text-blue-600 ml-2">Call</button>
                  <button className="text-blue-600 ml-2">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactDetails;
