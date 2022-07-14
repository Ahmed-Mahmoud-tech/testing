import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";
import axios from "axios";
const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

jest.mock("axios");




describe("FollowersList", () => {
    beforeEach(() => {
        // console.log("RUNS BEFORE EACH TEST")
        axios.get.mockResolvedValueOnce({ data: {
            results: [
                {
                    name: {
                        first: "aaaaaaaaaa",
                        last: "ssssssssssssssss"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/59.jpg"
                    },
                    login: {
                        username: "rrrrrrrrrrrrrrrr"
                    }
                }
            ]
        }
        });
        })

    // beforeAll(() => {
    //     console.log("RUNS ONCE BEFORE ALL TESTS")
    // })

    // afterEach(() => {
    //     console.log("RUNS AFTER EACH TEST")
    // })

    // afterAll(() => {
    //     console.log("RUNS ONCE AFTER ALL TESTS")
    // })
  

    it('should fetch and render input element', async () => {
        render(
            <MockFollowersList />
        );
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        expect(followerDivElement).toBeInTheDocument();
    });
    
    it('should fetch and render input element', async () => {
        render(
            <MockFollowersList />
        );
    
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        expect(followerDivElement).toBeInTheDocument();
        // expect(followerDivElement).toHaveTextContent(/aaa/i);
    });
})





