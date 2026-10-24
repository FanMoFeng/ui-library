import ClaudeModelSelector from "@/components/ui/claude-model-selector";

export default function ClaudeModelSelectorDemo() {
  return (
    <main
      style={{
        width: "100vw",
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        boxSizing: "border-box",
        background: "#FDFDFC",
        colorScheme: "light",
      }}
    >
      <ClaudeModelSelector value={0} open />
    </main>
  );
}

