const KeywordChip = ({ keyword }: { keyword: string }) => {
  return (
    <span className="border-border bg-muted/50 text-muted-foreground rounded-md border px-2 py-0.5 text-xs">
      #{keyword}
    </span>
  );
};

export default KeywordChip;
