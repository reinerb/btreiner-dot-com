import { useRouter } from "next/router";
import Button from "./Button";
import LinkButton from "./LinkButton";
import { twMerge } from "tailwind-merge";

type NotFoundProps = {
  resourceType?: string;
  className?: string;
};

export default function NotFound({
  resourceType = "page",
  className,
}: NotFoundProps) {
  const router = useRouter();

  return (
    <section
      className={twMerge("flex flex-col justify-center gap-4", className)}
    >
      <h1 className="text-center text-4xl">404 | Not Found</h1>
      <p>Sorry, the {resourceType} you're looking for does not exist.</p>
      <div className="flex justify-center gap-4">
        <Button onClick={() => router.back()} primary>
          Go Back
        </Button>
        <LinkButton href="/" primary>
          Go Home
        </LinkButton>
      </div>
    </section>
  );
}
