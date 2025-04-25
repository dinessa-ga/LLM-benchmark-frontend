//3
// report-card-factory.js
export class ReportCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error('Render method must be implemented by subclass');
  }
}

export class SalesReport extends ReportCard {
  render() {
    return `📈 Sales Report: ${JSON.stringify(this.data, null, 2)}`;
  }
}

export class CostsReport extends ReportCard {
  render() {
    return `📉 Costs Report: ${JSON.stringify(this.data, null, 2)}`;
  }
}

export class PerformanceReport extends ReportCard {
  render() {
    return `📊 Performance Report: ${JSON.stringify(this.data, null, 2)}`;
  }
}

export class ReportFactory {
  static createReportCard(type, data) {
    const normalizedType = type.toLowerCase().trim();
    
    switch(normalizedType) {
      case 'sales':
        return new SalesReport(data);
      case 'costs':
        return new CostsReport(data);
      case 'performance':
        return new PerformanceReport(data);
      default:
        throw new Error(`🚨 Unknown report type: "${type}". Valid types are: sales, costs, performance`);
    }
  }
}