export const steps = [
  {
    id: "step-1",
    label: "Step 1",
    children: [
      { id: "step-1.1", label: "Step 1.1", children: [] },
      { id: "step-1.2", label: "Step 1.2", children: [] }
    ]
  },
  {
    id: "step-2",
    label: "Step 2",
    children: [
      {
        id: "step-2.1",
        label: "Step 2.1",
        children: [
          { id: "step-2.1.1", label: "Step 2.1.1", children: [] },
          { id: "step-2.1.2", label: "Step 2.1.2", children: [] }
        ]
      },
      {
        id: "step-2.2",
        label: "Step 2.2",
        children: []
      }
    ]
  },
  {
    id: "step-3",
    label: "Step 3",
    children: []
  }
];

// export default {};
