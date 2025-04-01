import { useTranslations } from "next-intl";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const t = useTranslations("Home");
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4 md:p-8">
      <p className="mb-4">{t("areYouSure")}</p>
      <p className="mb-6 text-gray-600 max-w-md text-center">
        {t("actionCannotBeUndone")}
      </p>

      <div className="flex space-x-4">
        <Button
          variant="destructive"
          size="lg"
          className="gap-2 bg-rose-500 hover:bg-rose-600 text-white shadow-sm transition-colors"
        >
          <X className="h-4 w-4" />
          {t("cancel")}
        </Button>
        <Button
          size="lg"
          className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
        >
          <Check className="h-4 w-4" />
          {t("continue")}
        </Button>
      </div>
    </div>
  );
}
