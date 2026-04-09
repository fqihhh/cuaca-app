export default function SearchBar({ location, setLocation, onSearch }) {
  return (
    <div className="p-4">
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={onSearch}
        placeholder="Masukkan kota..."
        className="p-4 w-80 rounded-2xl bg-white/10 border border-white/20 outline-none focus:border-blue-400"
      />
    </div>
  );
}
