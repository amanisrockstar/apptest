import TestComponent from "./container/TestComponent";

export const dynamic = "force-dynamic";

export default async function Page() {
  const myServerAction = async () => {
    "use server";
    try {
      const companyData = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      ).then((response) => response.json());

      return {
        success: true,
        message: "Test details submitted",
        companyData,
      };
    } catch (e) {
      console.log("Failed to submit test details", e);

      return {
        success: false,
        message: "Failed to submit test details",
      };
    }
  };

  return <TestComponent myServerAction={myServerAction} />;
}

