# React Router Dom: useNavigate Hook Misuse

This repository demonstrates a common error when using the `useNavigate` hook in React Router DOM. The error occurs when trying to use `useNavigate` in a component that's not directly part of the router's context (e.g., a component nested several levels deep without using context).  This results in the navigation not working as expected, often silently failing.

## Bug
The bug lies in the `About` component where `useNavigate` is called outside of the scope where it's properly initialized by the router context.  The fix involves ensuring `useNavigate` is called correctly within a component that's within the router context.

## Solution
The solution is to restructure the application so the component using `useNavigate` is connected to the router context. Alternatively, pass the navigation function as props.