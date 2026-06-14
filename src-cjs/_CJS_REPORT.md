# CommonJS Restoration Prototype Report

## Summary

- Source: `src-readable/`
- Output: `src-cjs/`
- Modules generated: 606
- Extraction failures: 0

## Purpose

This is a load-checking restoration layer, not the final hand-written source.
Each file keeps the readable webpack body and runs it through a local CommonJS-compatible webpack require shim.
Use this directory to prove dependency and export behavior before class, decorator, and async rewrites.

## Failures

- None
