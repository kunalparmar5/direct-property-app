/*export default function SignupPage() {
  return (
    <div>
      <h1>Signup Page</h1>
    </div>
  );*/
//}// src/app/page.tsx
import PropertyList from "@/components/PropertyList";

export default function Home() {
  return (
    <div>
      {/* Other content */}
      <PropertyList />
    </div>
  );
}
