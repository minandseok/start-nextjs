import { API_URL } from "../../../../constants";
import { Iparams } from "../page";

async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function Providers({ params }: Iparams) {
  const { id } = await params;
  const providers = await getProviders(id);
  return (
    <div>
      <div>You have to buyㅜㅜ</div>
    </div>
  );
}
