import { API_URL } from "../../../../(home)/page";
import { Iparams } from "../page";

async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function Providers({ params: { id } }: Iparams) {
  const providers = await getProviders(id);
  return (
    <div>
      <div>You have to buyㅜㅜ</div>
    </div>
  );
}
