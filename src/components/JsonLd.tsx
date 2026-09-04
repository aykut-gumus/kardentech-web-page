export type JsonLdProps = {
  data: Record<string, any> | Record<string, any>[];
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

