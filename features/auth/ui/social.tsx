import { Button } from "@/shared/ui";
import { FaGoogle, FaYandex } from "react-icons/fa";

export function Social() {
  return (
    <div className="mb-2 grid grid-cols-2 gap-6 space-y-4">
      <Button variant={"outline"} className="cursor-pointer">
        <FaGoogle className="mr-2 size-4" />
        Google
      </Button>
      <Button variant={"outline"} className="cursor-pointer">
        <FaYandex className="mr-2 size-4" />
        Яндекс
      </Button>
    </div>
  );
}
