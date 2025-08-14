export default function Alerts() {
  const alerts = [
    { id: 1, message: "Water quality dropped to Moderate", date: "2025-08-10" },
    { id: 2, message: "Tank level below 20%", date: "2025-08-12" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Alerts</h2>
      <ul>
        {alerts.map((a) => (
          <li key={a.id} className="bg-red-100 p-4 mb-2 rounded">
            <strong>{a.date}:</strong> {a.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
