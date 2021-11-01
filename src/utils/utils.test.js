import React from 'react';
import fetchApi from './fetchApi';

describe("Testing utils functions", () => {
    test("Should return an object", async () => {
        let data = await fetchApi("http://localhost:8080/videos");
        expect(typeof data).toBe("object");
    });

    // test("Should return an empty array", async () => {
    //     try {
    //         let data = await fetchApi("http://localhost:808u0/video");
    //     } catch (e) {
    //         expect(typeof e).toBe("object");
    //     }
    // });

});