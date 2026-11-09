/// Response models for the Line Sorter API.

/// API Response wrapper.
class LinesorterResponse {
  final String status;
  final dynamic error;
  final LinesorterData? data;

  /// Set only when the current plan locks one or more fields; null otherwise.
  final PremiumInfo? premium;

  LinesorterResponse({
    required this.status,
    this.error,
    this.data,
    this.premium,
  });

  factory LinesorterResponse.fromJson(Map<String, dynamic> json) => LinesorterResponse(
    status: json['status'] as String? ?? '',
    error: json['error'],
    data: json['data'] != null ? LinesorterData.fromJson(json['data']) : null,
    premium: json['premium'] != null ? PremiumInfo.fromJson(json['premium']) : null,
  );

  Map<String, dynamic> toJson() => {
    'status': status,
    if (error != null) 'error': error,
    if (data != null) 'data': data,
    if (premium != null) 'premium': premium!.toJson(),
  };
}

/// Describes fields the current plan does not unlock. Locked fields arrive as null
/// in [data], and [lockedFields] names them (nested ones use dot paths).
class PremiumInfo {
  final String? message;
  final String? upgradeUrl;
  final List<String>? lockedFields;

  PremiumInfo({this.message, this.upgradeUrl, this.lockedFields});

  factory PremiumInfo.fromJson(Map<String, dynamic> json) => PremiumInfo(
    message: json['message'] as String?,
    upgradeUrl: json['upgrade_url'] as String?,
    lockedFields: (json['locked_fields'] as List?)?.map((e) => e.toString()).toList(),
  );

  Map<String, dynamic> toJson() => {
    if (message != null) 'message': message,
    if (upgradeUrl != null) 'upgrade_url': upgradeUrl,
    if (lockedFields != null) 'locked_fields': lockedFields,
  };
}

/// Response data for the Line Sorter API.

class LinesorterData {
  List<String>? sorted;
  num? lineCount;
  String? order;
  bool? caseSensitive;

  LinesorterData({
    this.sorted,
    this.lineCount,
    this.order,
    this.caseSensitive,
  });

  factory LinesorterData.fromJson(Map<String, dynamic> json) => LinesorterData(
      sorted: (json['sorted'] as List?)?.cast<String>(),
      lineCount: json['lineCount'],
      order: json['order'],
      caseSensitive: json['caseSensitive'],
    );
}

class LinesorterRequest {
  List<String> lines;
  String? order;
  bool? caseSensitive;

  LinesorterRequest({
    required this.lines,
    this.order,
    this.caseSensitive,
  });

  Map<String, dynamic> toJson() => {
      'lines': lines,
      if (order != null) 'order': order,
      if (caseSensitive != null) 'caseSensitive': caseSensitive,
    };
}
