/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { submitTestDetails } from "@/app/actions/quote/test-page";
import React from "react";

// import { logger } from '@ninja/utilities';
// import { submitTestDetails } from '../../../../../../../actions/quote/test-page';

const TestComponent = ({ myServerAction }: any) => {
  const [response, setResponse] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  // const handleSUbmitClick = async () => {
  // 	try {
  // 		setIsLoading(true);
  // 		const response = await submitTestDetails();

  // 		setIsLoading(false);

  // 		setResponse(JSON.stringify(response));

  // 		logger.log(response, 'response test page');
  // 	} catch (error) {
  // 		setIsLoading(false);
  // 		logger.error(error);

  // 		setResponse('Failed to submit test details');
  // 	}
  // };

  return (
    <div className="flex flex-col gap-4">
      <p>Latest Version: V1</p>
      <button
        onClick={async () => {
          setIsLoading(true);
          const response = await myServerAction();
          setIsLoading(false);

          console.log(response, "response test page");
        }}
      >
        Submit
      </button>
      <button
        onClick={async () => {
          setIsLoading(true);

          const response = await submitTestDetails();
          setIsLoading(false);
          setResponse(JSON.stringify(response));

          console.log(response, "response test page");
        }}
      >
        Submit
      </button>
      {isLoading && <div>Loading...</div>}
      <div>{response}</div>
    </div>
  );
};

export default TestComponent;

