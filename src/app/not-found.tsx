import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-page text-center max-w-2xl mx-auto">
        <p className="text-primary font-bold text-7xl mb-4">404</p>
        <h1 className="section-title">Page Not Found</h1>
        <p className="details-text mt-4">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Button href="/">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}
