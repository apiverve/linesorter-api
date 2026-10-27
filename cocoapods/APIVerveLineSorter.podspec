Pod::Spec.new do |s|
  s.name             = 'APIVerveLineSorter'
  s.version          = '1.2.3'
  s.summary          = 'Line Sorter organizes text by sorting lines alphabetically in ascending or descending order with case-sensitive options.'
  s.description      = <<-'DESC'
Line Sorter organizes text by sorting lines alphabetically in ascending or descending order with case-sensitive options.

This iOS/macOS SDK provides a convenient way to access the Line Sorter from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/linesorter?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/linesorter-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveLineSorter/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
