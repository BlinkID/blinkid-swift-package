// swift-tools-version:5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "BlinkID",
    products: [
        // Products define the executables and libraries a package produces, and make them visible to other packages.
        .library(
            name: "BlinkID",
            targets: ["Microblink"]),
    ],
    dependencies: [],
    targets: [
        .binaryTarget(
            name: "Microblink",
            url: "https://github.com/BlinkID/blinkid-ios/releases/download/v5.16.1/Microblink.xcframework.zip",
            checksum: "34497041dff3a215087bfceff275c5fabf88ae87347e708472365d713a733397")
    ]
)

